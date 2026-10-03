export const DEPTH_STOPS=[0,200,1000,4000,4800];
export function depthAtProgress(raw){const p=Math.max(0,Math.min(1,raw));const section=Math.min(3,Math.floor(p*4));return DEPTH_STOPS[section]+(DEPTH_STOPS[section+1]-DEPTH_STOPS[section])*(p*4-section);}
export function progressAtDepth(depth){const d=Math.max(0,Math.min(4800,depth));const section=Math.min(3,DEPTH_STOPS.findIndex((_,i)=>DEPTH_STOPS[i+1]>d));if(section<0)return 1;return (section+(d-DEPTH_STOPS[section])/(DEPTH_STOPS[section+1]-DEPTH_STOPS[section]))/4;}
export function chapterAtDepth(depth){return depth<200?0:depth<1000?1:depth<4000?2:3;}
