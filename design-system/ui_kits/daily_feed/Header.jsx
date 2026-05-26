/* global React */

function Header() {
  return (
    <header style={hStyles.bar} data-screen-label="01 Header">
      <div style={hStyles.left}>
        <div style={hStyles.brand}>
          <img src="../../assets/logo-mark.png" alt="" style={hStyles.markImg} />
          <span style={hStyles.wordmark}>SPARSA</span>
        </div>
        <span style={hStyles.divider}/>
        <span style={hStyles.subtitle}>Revenue Operations Intelligence</span>
      </div>
      <div style={hStyles.right}>
        <span style={hStyles.livePill}>
          <span style={hStyles.liveDot}/>LIVE
        </span>
        <div style={hStyles.avatar}><span style={hStyles.avatarLetters}>SM</span></div>
      </div>
    </header>
  );
}

function NavTabs({ active = 'feed', onSelect }) {
  const tabs = [
    { id:'dashboard', label:'Dashboard' },
    { id:'insights',  label:'AI Insights' },
    { id:'chat',      label:'Chat' },
    { id:'feed',      label:'Daily Feed', count:21 },
  ];
  return (
    <nav style={hStyles.nav}>
      <div style={hStyles.navInner}>
        {tabs.map(t => {
          const isActive = t.id === active;
          return (
            <button key={t.id}
              onClick={() => onSelect && onSelect(t.id)}
              style={{ ...hStyles.tab,
                color: isActive ? '#3D5943' : '#7A7670',
                borderColor: isActive ? '#3D5943' : 'transparent',
                fontWeight: isActive ? 600 : 500,
              }}>
              {t.label}
              {t.count != null && (
                <span style={hStyles.tabCount}>{t.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

const hStyles = {
  bar:       { display:'flex', alignItems:'center', justifyContent:'space-between',
               padding:'0 32px', height:64, background:'#3D5943', flexShrink:0 },
  left:      { display:'flex', alignItems:'center', gap:18 },
  brand:     { display:'flex', alignItems:'center', gap:10 },
  markImg:   { width:32, height:32, display:'block' },
  wordmark:  { font:'700 20px/1 Inter', color:'#FBF4F1',
               letterSpacing:'0.04em' },
  divider:   { width:1, height:20, background:'#9FADA1', opacity:0.4 },
  subtitle:  { font:'400 14px/1 Inter', color:'#9FADA1' },
  right:     { display:'flex', alignItems:'center', gap:14 },
  livePill:  { display:'flex', alignItems:'center', gap:6, padding:'5px 12px',
               background:'rgba(251,244,241,0.12)', borderRadius:999,
               color:'#E4ECE3', font:'500 12px Inter' },
  liveDot:   { width:7, height:7, background:'#9FE0A1', borderRadius:'50%',
               boxShadow:'0 0 8px rgba(159,224,161,0.8)' },
  avatar:    { width:32, height:32, background:'#CD8C6B', borderRadius:'50%',
               display:'flex', alignItems:'center', justifyContent:'center' },
  avatarLetters: { font:'600 12px Inter', color:'#FBF4F1' },

  nav:       { borderBottom:'1px solid #E7D9D0', background:'#FBF4F1' },
  navInner:  { display:'flex', alignItems:'center', gap:8, padding:'14px 32px',
               maxWidth:1240, margin:'0 auto', width:'100%', boxSizing:'border-box' },
  tab:       { display:'flex', alignItems:'center', gap:8,
               padding:'6px 14px', background:'transparent',
               border:'1px solid transparent', borderRadius:999,
               font:'500 14px Inter', cursor:'pointer' },
  tabCount:  { padding:'1px 8px', background:'#CD8C6B', color:'#FBF4F1',
               borderRadius:999, font:'600 11px Inter' },
};

window.Header = Header;
window.NavTabs = NavTabs;
