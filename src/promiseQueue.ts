/**
 * run promise list by queue
 * @param myPromises
 * @returns
 */
export default function promiseQueue(myPromises: (() => Promise<any>)[]): Promise<any> {
  return myPromises.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}