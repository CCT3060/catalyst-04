export default function Footer({ go }) {
  return (
    <footer style={{background:"rgb(249, 247, 243)",color:"#040404",padding:"clamp(60px,7vw,90px) clamp(20px,4vw,56px) 36px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(40% 60% at 90% 0%,rgba(67,147,74,.12),transparent 60%)"}}></div>
      <div style={{position:"relative",maxWidth:1240,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.6fr 1fr 1fr 1fr",gap:40}} data-footgrid>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer"}} onClick={() => go("home")}>
              <img src="/logo.webp" alt="Catalyst Logo" style={{height:38,width:"auto"}} />
            </div>
            <p style={{marginTop:22,maxWidth:340,fontSize:15,lineHeight:1.7,color:"rgba(0, 0, 0, 0.6)"}}>An integrated services partner creating environments where people work, heal, learn, live, and connect.</p>
            <div style={{marginTop:24,fontFamily:"Inter Tight",fontSize:20,fontWeight:600,color:"#000000"}}>People at the Heart of Everything We Do</div>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:600,letterSpacing:".1em",color:"#0373ff",marginBottom:18}}>SOLUTIONS</div>
            <div style={{display:"flex",flexDirection:"column",gap:12,fontSize:"14.5px",color:"rgba(0, 0, 0, 0.75)"}}>
              {[["food","Food Services"],["ifm","Facilities Management"],["infra","Infrastructure Solutions"],["htm","Healthcare Technology"],["workforce","Workforce Solutions"]].map(([p,name]) => (
                <span key={p} className="navlink" onClick={() => go(p)} style={{fontSize:"14.5px"}}>{name}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:600,letterSpacing:".1em",color:"#0373ff",marginBottom:18}}>COMPANY</div>
            <div style={{display:"flex",flexDirection:"column",gap:12,fontSize:"14.5px",color:"rgb(0, 0, 0)"}}>
              {[["about","About Us"],["sectors","Sectors"],["careers","Careers"],["contact","Contact"]].map(([p,name]) => (
                <span key={p} className="navlink" onClick={() => go(p)} style={{fontSize:"14.5px"}}>{name}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:600,letterSpacing:".1em",color:"#0373ff",marginBottom:18}}>GET IN TOUCH</div>
            <div style={{display:"flex",flexDirection:"column",gap:12,fontSize:"14.5px",color:"rgba(0, 0, 0, 0.75)"}}>
              <span>Business Inquiries</span>
              <span>Office Locations</span>
              <button className="mag" onClick={() => go("contact")} style={{marginTop:8,background:"#0373ff",color:"#fff",fontWeight:600,fontSize:14,padding:"12px 22px",borderRadius:999,alignSelf:"flex-start"}}>Partner With Us</button>
            </div>
          </div>
        </div>
        <div style={{marginTop:54,paddingTop:26,borderTop:"1px solid rgba(0,0,0,.1)",display:"flex",flexWrap:"wrap",gap:14,justifyContent:"space-between",fontSize:13,color:"rgba(0,0,0,.5)"}}>
          <span>© 2026 Catalyst Service Solutions. All rights reserved.</span>
          <span>ISO 9001 · ISO 14001 · ISO 45001 · FSSAI · NABH-Aligned</span>
        </div>
      </div>
    </footer>
  );
}
