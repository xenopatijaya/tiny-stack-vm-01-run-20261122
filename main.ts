import{readFileSync as R,writeFileSync as W,mkdirSync as K,readdirSync as L}from"node:fs";
const T="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function r(p,i){
let D=new Int32Array(256),M=new Int32Array(256),C=new Int32Array(64),O=new Uint8Array(65536),s=0,c=0,q=0,n=0,o=0,j=0;
try{for(;;){
if(n==1e6)throw 10;
if(q<0||q>=p.length)throw 9;
let h=T[p[q]]||" ";
if(h==" ")throw 5;
let v=h.charCodeAt(0)-33,a=v>>4,e=(v>>2)&3,f=v&3;
if(q+a>=p.length)throw 9;
n++;
if(s<e)throw 2;
if(s-e+f>256)throw 3;
let g=q+1+a,k=p[q];q=g;
if(k==0)return{o:O.slice(0,o),c:0};
else if(k==1)D[s++]=(p[g-1]<<24)>>24;
else if(k==2)D[s++]=p[g-4]|p[g-3]<<8|p[g-2]<<16|p[g-1]<<24;
else if(k==3)s--;
else if(k==4)D[s]=D[s-1],s++;
else if(k==5){let t=D[s-1];D[s-1]=D[s-2];D[s-2]=t}
else if(k==6)D[s]=D[s-2],s++;
else if(k==7){let t=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=t}
else if(k==23)D[s-1]=-D[s-1]|0;
else if(k==27)D[s-1]=~D[s-1];
else if(k>15&&k<35&&k!=23&&k!=27&&k!=31){let b=D[s-1],a=D[s-2],y;
if(k>18&&k<23&&!b)throw 4;
if(k==16)y=a+b|0;else if(k==17)y=a-b|0;else if(k==18)y=Math.imul(a,b);
else if(k==19)y=a==-2147483648&&b==-1?a:a/b|0;
else if(k==20)y=b==-1?0:a%b|0;
else if(k==21)y=(a>>>0)/(b>>>0)|0;
else if(k==22)y=(a>>>0)%(b>>>0)|0;
else if(k==24)y=a&b;else if(k==25)y=a|b;else if(k==26)y=a^b;
else if(k==28)y=a<<(b&31);else if(k==29)y=a>>(b&31);else if(k==30)y=(a>>>(b&31))|0;
else if(k==32)y=a==b?1:0;else if(k==33)y=a<b?1:0;else y=(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=y}
else if(k>47&&k<51){let t=(p[g-2]|p[g-1]<<8)<<16>>16,x=0;if(k>48)x=D[--s];if(k==48||k==49&&x==0||k==50&&x!=0)q=g+t}
else if(k==51){if(c==64)throw 7;C[c++]=g;q=p[g-2]|p[g-1]<<8}
else if(k==52){if(!c)throw 8;q=C[--c]}
else if(k==64){let a=D[s-1];if(a<0||a>255)throw 6;D[s-1]=M[a]}
else if(k==65){let a=D[s-1];if(a<0||a>255)throw 6;s-=2;M[a]=D[s]}
else if(k==80){let z=String(D[s-1]);if(o+z.length>65536)throw 11;s--;for(let m=0;m<z.length;m++)O[o++]=z.charCodeAt(m)}
else if(k==81){if(o>65535)throw 11;O[o++]=D[--s]&255}
else if(k==82)D[s++]=j<i.length?i[j++]:-1;
else return{o:O.slice(0,o),c:D[--s]&255};
}}catch(e){return{o:O.slice(0,o),c:typeof e=="number"?e:1}}
}
let I=process.env.MAKEFUN_INPUT_DIR||"/input",E=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let d of L(I).sort()){let z=r(R(I+"/"+d+"/program.bin"),R(I+"/"+d+"/input.bin"));K(E+"/"+d,{recursive:true});W(E+"/"+d+"/stdout.bin",z.o);W(E+"/"+d+"/exit.txt",z.c+"\n")}
