/* global React */

function SectionLabel({ children, count, total, tone = 'critical' }) {
  const color = { critical:'#B33A28', decision:'#C28B3C', neutral:'#7A7670' }[tone] || '#7A7670';
  return (
    <div style={slStyles.row}>
      <span style={{ ...slStyles.label, color }}>{children}</span>
      <span style={slStyles.rule}/>
      <span style={slStyles.count}>{count} item{count===1?'':'s'}{total ? ` of ${total}` : ''}</span>
    </div>
  );
}

const slStyles = {
  row:   { display:'flex', alignItems:'center', gap:14, padding:'8px 0' },
  label: { font:'600 12px Inter', letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap' },
  rule:  { flex:1, height:1, background:'#E7D9D0' },
  count: { font:'500 12px Inter', color:'#7A7670', whiteSpace:'nowrap' },
};

window.SectionLabel = SectionLabel;
