// src/services/EventService.d.ts  
 

declare function getEvents(): Promise<{ data: Event[] }>;  

export {  
  getEvents  
  // 如果还有其他导出，也在这里列出  
};  

// 或者，如果你希望它是一个具有多个方法的对象，可以这样声明：  
declare const EventService: {  
  getEvents: () => Promise<{ data: Event[] }>;  
  // 其他方法的类型声明  
};  

export default EventService;