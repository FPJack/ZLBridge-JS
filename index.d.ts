interface ZLBridge {
    call(method: string,arg: any,func?:(arg: any)=>void):void;
    register(method:string,func:(arg:any)=>any):void;
    registerWithCallback(method:string,func:(arg:any,callback:(arg:any,end?:boolean)=>void)=>void):void;
    removeRegisted(method:string):void;
}
declare const zlbridge: ZLBridge;
export default zlbridge;
