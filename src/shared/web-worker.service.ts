import { Injectable } from '@angular/core';

/**
 * <p><code>Service</code> that handles the <i>web worker</i> creation from the given input
 * <code>Function</code>.
 */
@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {

	/**
	 * <p>Method that starts the execution of the given function with the given data.</p>
	 * @param workerFunction function to execute on the web worker context.
	 * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
	 * the function must be self-contained, meaning that no external functions or
	 * libraries can be passed through this parameter.
	 */
	public start<T>(workerFunction: (input: any) => T, data?: any): Worker {
		const url = this.createWorkerUrl(workerFunction);
		return this.startUrl(url, data);
	}

	/**
	 * <p>Method that starts execution of the given <i>ObjectURL</i> with the given data.</p>
	 * @param url <i>ObjectURL</i> to execute on the web worker context.
	 * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
	 * the function must be self-contained, meaning that no external functions or
	 * libraries can be passed through this parameter.
	 */
	public startUrl(url: string, data?: any): Worker {
		const worker = new Worker(url);
		data["__start"] = true;
		worker.postMessage(data);
		return worker;
	}

	/**
	 * <p>Method that creates a <i>web worker</i> <i>ObjectURL</i> from the given
	 * <i>Function</i> object.</p>
	 * @param resolve function the <i>web worker</i> will execute.
	 */
	private createWorkerUrl(resolve: Function): string {
		const resolveString = resolve.toString();
		// The template is basically an addEventListener attachment that creates a
		// closure (IIFE*) with the provided function and invokes it with the provided
		// data.
		// * IIFE stands for immediately Immediately-Invoked Function Expression
		const webWorkerTemplate = `
				self.addEventListener('message', function(e) {
					if (!e.data.__start)
						return;

					((${resolveString})(e.data));
				});
			`;
		const blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });
		return URL.createObjectURL(blob);
	}

}