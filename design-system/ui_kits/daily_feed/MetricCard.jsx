/* global React */

function MetricRow({ children }) {
  return <div style={mrStyles.row}>{children}</div>;
}

function MetricCard({ eyebrow, value, sub, tone = 'neutral' }) {
  const eyebrowColor = {
    critical:'#B33A28', neutral:'#7A7670', warn:'#C28B3C', good:'#4F7A55',
  }[tone] || '#7A7670';
  return (
    <div style={mrStyles.card}>
      <span style={{ ...mrStyles.eyebrow, color:eyebrowColor }}>{eyebrow}</span>
      <span style={mrStyles.value}>{value}</span>
      <span style={mrStyles.sub}>{sub}</span>
    </div>
  );
}

const mrStyles = {
  row:    { display:'flex', alignItems:'stretch', gap:14, width:'100%' },
  card:   { flex:1, minWidth:0, display:'flex', flexDirection:'column', gap:10,
            padding:'18px 22px 22px', background:'#FFFFFF',
            border:'1px solid #E7D9D0', borderRadius:14 },
  eyebrow:{ font:'600 11px/100% Inter', letterSpacing:'0.10em',
            textTransform:'uppercase' },
  value:  { font:'700 36px/100% Inter',
            color:'#1E2B22', letterSpacing:'-0.02em',
            fontVariantNumeric:'tabular-nums lining-nums' },
  sub:    { font:'400 12.5px/140% Inter', color:'#7A7670' },
};

window.MetricRow = MetricRow;
window.MetricCard = MetricCard;
