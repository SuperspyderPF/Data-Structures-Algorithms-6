jump=(n, jz = [0], z = n.length-1)=>{for(i=1;i<n.length;++i) for(j=0;j<i;++j) if(n[j]>=i-j) jz[i] = jz[i]? Math.min(jz[i], jz[j]+1) : jz[j]+1;return jz[z];}
    