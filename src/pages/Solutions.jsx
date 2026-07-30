import CTA from "../components/CTA";
import { UtensilsCrossed, Building2, Factory, Stethoscope, Users, Puzzle, Star, Lightbulb, Leaf, TrendingUp, Target, ArrowRight } from "lucide-react";

export default function Solutions({ go }) {
  return (
    <div data-screen-label="Solutions">
      <section style={{position:"relative",background:"#191919",padding:"170px clamp(20px,4vw,56px) clamp(70px,8vw,110px)",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(55% 60% at 80% 15%,rgba(255,127,0,.22),transparent 60%),radial-gradient(55% 60% at 10% 95%,rgba(67,147,74,.2),transparent 60%)"}}></div>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(circle at 50% 30%,#000,transparent 75%)"}}></div>
        <div style={{position:"relative",maxWidth:1240,margin:"0 auto"}}>
          <div data-reveal className="shown" style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"Caveat, cursive",color:"#FF7F00",fontWeight:600,fontSize:24,letterSpacing:"0",marginBottom:22}}><span style={{width:26,height:2,background:"#FF7F00"}}></span>Solutions</div>
          <h1 data-reveal data-delay="1" className="shown" style={{fontSize:"clamp(38px,5.6vw,80px)",color:"#fff",maxWidth:1000}}>Solutions Designed Around <span className="gradtext">Outcomes</span></h1>
          <p data-reveal data-delay="2" className="shown" style={{marginTop:26,maxWidth:780,fontSize:"clamp(16px,1.3vw,19px)",lineHeight:1.7,color:"rgba(255,255,255,.7)"}}>Every organization operates within a complex ecosystem of spaces, infrastructure, technology, operations, and experiences. When these elements work in harmony, performance improves, environments become more resilient, and meaningful outcomes follow.</p>
        </div>
      </section>

      <section style={{padding:"clamp(70px,8vw,110px) clamp(20px,4vw,56px)",background:"#fff"}}>
        <div style={{maxWidth:1240,margin:"0 auto"}}>
          <p data-reveal style={{maxWidth:900,fontSize:"clamp(18px,2vw,26px)",fontFamily:"Inter Tight",fontWeight:500,lineHeight:1.5,color:"#191919"}}>Catalyst brings together specialized expertise, operational excellence, and innovation to create integrated solutions that strengthen organizations, elevate experiences, and enable sustainable growth.</p>
          <p data-reveal data-delay="1" style={{marginTop:18,fontSize:17,color:"#6E6A61",maxWidth:760,lineHeight:1.7}}>Because the true measure of a solution is not what it delivers—it's the impact it creates.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:20,marginTop:60}} data-3col>
            <div data-reveal onClick={() => go("food")} className="lift" style={{gridColumn:"span 4",position:"relative",minHeight:300,borderRadius:32,overflow:"hidden",background:"linear-gradient(135deg,#191919,#242424)",padding:36,display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(60% 70% at 85% 20%,rgba(255,127,0,.3),transparent 60%)"}}></div>
              <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{width:48,height:48,borderRadius:16,background:"rgba(255,127,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#FF7F00"}}>
                  <UtensilsCrossed size={24} />
                </div>
                <span style={{fontFamily:"Inter Tight",fontWeight:600,color:"rgba(255,255,255,.25)",fontSize:34}}>01</span>
              </div>
              <div style={{position:"relative"}}>
                <h3 style={{color:"#fff",fontSize:28}}>Food Services</h3>
                <p style={{color:"rgba(255,255,255,.65)",fontSize:15,lineHeight:1.6,marginTop:10,maxWidth:420}}>Nourishing Experiences. Enabling Performance. Dining environments that bring together nutrition, quality, sustainability, and innovation.</p>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:16,color:"#FF7F00",fontWeight:600,fontSize:14}}>Explore <ArrowRight size={16} /></span>
              </div>
            </div>

            <div data-reveal data-delay="1" onClick={() => go("ifm")} className="lift" style={{gridColumn:"span 2",position:"relative",minHeight:300,borderRadius:32,overflow:"hidden",background:"linear-gradient(135deg,#242424,#2E2E2E)",padding:30,display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(70% 70% at 50% 20%,rgba(67,147,74,.28),transparent 60%)"}}></div>
              <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{width:48,height:48,borderRadius:16,background:"rgba(67,147,74,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#43934A"}}>
                  <Building2 size={24} />
                </div>
                <span style={{fontFamily:"Inter Tight",fontWeight:600,color:"rgba(255,255,255,.25)",fontSize:34}}>02</span>
              </div>
              <div style={{position:"relative"}}>
                <h3 style={{color:"#fff",fontSize:23}}>Integrated Facilities Management</h3>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:14,color:"#FF7F00",fontWeight:600,fontSize:14}}>Explore <ArrowRight size={16} /></span>
              </div>
            </div>

            <div data-reveal onClick={() => go("infra")} className="lift" style={{gridColumn:"span 2",position:"relative",minHeight:300,borderRadius:32,overflow:"hidden",background:"linear-gradient(135deg,#242424,#2E2E2E)",padding:30,display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(70% 70% at 50% 20%,rgba(255,184,0,.2),transparent 60%)"}}></div>
              <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{width:48,height:48,borderRadius:16,background:"rgba(255,184,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFB800"}}>
                  <Factory size={24} />
                </div>
                <span style={{fontFamily:"Inter Tight",fontWeight:600,color:"rgba(255,255,255,.25)",fontSize:34}}>03</span>
              </div>
              <div style={{position:"relative"}}>
                <h3 style={{color:"#fff",fontSize:23}}>Infrastructure Solutions</h3>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:14,color:"#FF7F00",fontWeight:600,fontSize:14}}>Explore <ArrowRight size={16} /></span>
              </div>
            </div>

            <div data-reveal data-delay="1" onClick={() => go("htm")} className="lift" style={{gridColumn:"span 2",position:"relative",minHeight:300,borderRadius:32,overflow:"hidden",background:"linear-gradient(135deg,#242424,#2E2E2E)",padding:30,display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(70% 70% at 50% 20%,rgba(67,147,74,.28),transparent 60%)"}}></div>
              <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{width:48,height:48,borderRadius:16,background:"rgba(67,147,74,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#43934A"}}>
                  <Stethoscope size={24} />
                </div>
                <span style={{fontFamily:"Inter Tight",fontWeight:600,color:"rgba(255,255,255,.25)",fontSize:34}}>04</span>
              </div>
              <div style={{position:"relative"}}>
                <h3 style={{color:"#fff",fontSize:23}}>Healthcare Technology Management</h3>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:14,color:"#FF7F00",fontWeight:600,fontSize:14}}>Explore <ArrowRight size={16} /></span>
              </div>
            </div>

            <div data-reveal data-delay="2" onClick={() => go("workforce")} className="lift" style={{gridColumn:"span 2",position:"relative",minHeight:300,borderRadius:32,overflow:"hidden",background:"linear-gradient(135deg,#191919,#242424)",padding:30,display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(70% 70% at 50% 20%,rgba(255,127,0,.28),transparent 60%)"}}></div>
              <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{width:48,height:48,borderRadius:16,background:"rgba(255,127,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#FF7F00"}}>
                  <Users size={24} />
                </div>
                <span style={{fontFamily:"Inter Tight",fontWeight:600,color:"rgba(255,255,255,.25)",fontSize:34}}>05</span>
              </div>
              <div style={{position:"relative"}}>
                <h3 style={{color:"#fff",fontSize:23}}>Workforce Solutions</h3>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:14,color:"#FF7F00",fontWeight:600,fontSize:14}}>Explore <ArrowRight size={16} /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:"clamp(80px,10vw,140px) clamp(20px,4vw,56px)",background:"#F9F7F3"}}>
        <div style={{maxWidth:1240,margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:820,margin:"0 auto 56px"}}>
            <div data-reveal style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"Caveat, cursive",color:"#D96D00",fontWeight:600,fontSize:24,letterSpacing:"0",marginBottom:18,justifyContent:"center"}}><span style={{width:26,height:2,background:"#FF7F00"}}></span>The Catalyst Advantage<span style={{width:26,height:2,background:"#43934A"}}></span></div>
            <h2 data-reveal data-delay="1" style={{fontSize:"clamp(30px,4vw,52px)",color:"#191919"}}>One Vision. Multiple Capabilities. Shared Impact.</h2>
            <p data-reveal data-delay="2" style={{marginTop:20,fontSize:17,lineHeight:1.7,color:"#6E6A61"}}>What makes Catalyst different is not the breadth of our solutions. It is the way they come together. By integrating expertise across diverse operational environments, we help organizations simplify complexity, improve consistency, and create greater value across their ecosystem.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}} data-3col>
            {[[Puzzle,"Integrated Thinking",""],[Star,"Operational Excellence","1"],[Lightbulb,"Technology-Driven Innovation","2"],[Leaf,"Sustainable Practices",""],[TrendingUp,"Scalable Delivery","1"],[Target,"Measurable Outcomes","2"]].map(([Icon,name,delay],i) => (
              <div key={i} data-reveal data-delay={delay||undefined} className="lift" style={{background:"#fff",border:"1px solid rgba(25,25,25,.07)",borderRadius:28,padding:30}}>
                <div style={{width:44,height:44,borderRadius:14,background:"rgba(255,127,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:"#FF7F00",marginBottom:14}}>
                  <Icon size={22} />
                </div>
                <h4 style={{fontSize:19,color:"#191919",marginTop:8}}>{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"clamp(20px,4vw,56px)"}}>
        <div data-reveal style={{maxWidth:1300,margin:"0 auto",position:"relative",borderRadius:40,overflow:"hidden",background:"linear-gradient(135deg,#191919,#242424)",padding:"clamp(60px,9vw,120px) clamp(28px,5vw,80px)",textAlign:"center"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(50% 70% at 20% 20%,rgba(255,127,0,.25),transparent 60%),radial-gradient(50% 70% at 80% 80%,rgba(67,147,74,.25),transparent 60%)"}}></div>
          <div style={{position:"relative"}}>
            <div style={{fontFamily:"Inter Tight",fontSize:"clamp(22px,2.6vw,32px)",fontWeight:500,color:"rgba(255,255,255,.85)"}}>Every environment has the potential to achieve more.</div>
            <h2 style={{fontSize:"clamp(34px,5vw,64px)",color:"#fff",marginTop:10}}>We help unlock it.</h2>
            <div style={{display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginTop:36}}>
              <button className="mag" onClick={() => go("contact")} style={{background:"#FF7F00",color:"#fff",fontWeight:600,fontSize:16,padding:"17px 36px",borderRadius:999,display:"inline-flex",alignItems:"center",gap:8}}>Partner With Us <ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
