/* global React */

/* The hero unit of the Daily Feed. Each FeedCard contains:
   - a colored left rail (red for critical, hidden otherwise)
   - meta row: icon + channel + author + time + urgency chip
   - subject line
   - AISummary block
   - action buttons */

function FeedCard({ id, channel, author, time, subject, urgency, summary, buttons = [],
                   critical = false, children }) {
  return (
    <article style={fcStyles.card}
             data-screen-label={`Feed card · ${id}`}>
      <div style={fcStyles.head}>
        <ChannelBadge channel={channel} />
        <span style={fcStyles.channelName}>{channel.toUpperCase()}</span>
        <span style={fcStyles.author}>{author}</span>
        <span style={fcStyles.time}>{time}</span>
        <div style={{ flex:1 }} />
        {urgency && <UrgencyChip {...urgency} />}
        <span style={fcStyles.fid}>{id}</span>
      </div>
      <h3 style={fcStyles.subject}>{subject}</h3>
      {summary && <AISummary>{summary}</AISummary>}
      {children}
      {buttons.length > 0 && (
        <div style={fcStyles.btns}>
          {buttons.map((b, i) => <ActionButton key={i} {...b} />)}
        </div>
      )}
    </article>
  );
}

function ChannelBadge({ channel }) {
  const icon = {
    email: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="8" rx="1.2" stroke="#7A7670" strokeWidth="1.3"/>
        <path d="M2 4.5l6 4 6-4" stroke="#7A7670" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    slack: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="6.5" y="2" width="3" height="9" rx="1.5" stroke="#7A7670" strokeWidth="1.3"/>
        <rect x="2" y="6.5" width="9" height="3" rx="1.5" stroke="#7A7670" strokeWidth="1.3"/>
      </svg>
    ),
    salesforce: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M3 10a3 3 0 1 1 3-4 3 3 0 0 1 5 1 2.5 2.5 0 1 1-1 4.5H4a2 2 0 0 1-1-1.5z"
              stroke="#7A7670" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  }[channel] || null;
  return <div style={fcStyles.iconBox}>{icon}</div>;
}

function UrgencyChip({ label, tone = 'critical' }) {
  const pal = {
    critical:{ bg:'#F6EBE9', fg:'#B33A28' },
    decision:{ bg:'#F6E9D2', fg:'#C28B3C' },
    monitor: { bg:'#F4EAE3', fg:'#7A7670' },
    good:    { bg:'#DFE8DC', fg:'#4F7A55' },
  }[tone] || { bg:'#F6EBE9', fg:'#B33A28' };
  return (
    <span style={{ padding:'4px 10px', background:pal.bg, color:pal.fg,
                   borderRadius:999, font:'600 11px Inter',
                   letterSpacing:'0.10em', textTransform:'uppercase',
                   whiteSpace:'nowrap' }}>{label}</span>
  );
}

function AISummary({ children }) {
  return (
    <div style={fcStyles.ai}>
      <span style={fcStyles.aiPill}>AI Summary</span>
      <div style={fcStyles.aiBody}>{children}</div>
    </div>
  );
}

function ActionButton({ label, variant = 'primary', onClick }) {
  const styles = {
    primary: { background:'#3D5943', color:'#FBF4F1', border:'1px solid #3D5943' },
    ghost:   { background:'transparent', color:'#1E2B22', border:'1px solid #D9C7BA' },
    danger:  { background:'#F6EBE9', color:'#B33A28', border:'1px solid #E4C7BD' },
  }[variant];
  return (
    <button onClick={onClick} style={{ ...fcStyles.btn, ...styles }}>{label}</button>
  );
}

const fcStyles = {
  card:    { position:'relative', display:'flex', flexDirection:'column', gap:14,
             padding:'18px 22px 20px', background:'#FFFFFF',
             border:'1px solid #E7D9D0', borderRadius:8, overflow:'hidden' },
  head:    { display:'flex', alignItems:'center', gap:12 },
  iconBox: { width:28, height:28, background:'#F4EAE3', borderRadius:6,
             display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  channelName: { font:'600 11px Inter', letterSpacing:'0.10em',
                 textTransform:'uppercase', color:'#7A7670' },
  author:  { font:'500 13px Inter', color:'#4A4E48' },
  time:    { font:'500 12px Inter', color:'#A89D94',
             fontVariantNumeric:'tabular-nums lining-nums', letterSpacing:'0.01em' },
  fid:     { font:'500 11.5px Inter', color:'#A89D94',
             fontVariantNumeric:'tabular-nums lining-nums', letterSpacing:'0.02em',
             whiteSpace:'nowrap' },
  subject: { font:'600 17px/140% Inter', color:'#1E2B22', margin:0, letterSpacing:'-0.005em' },
  ai:      { display:'flex', flexDirection:'column', gap:10,
             padding:'14px 16px 16px', background:'#FAF5F2',
             border:'1px solid #E4C7BD', borderRadius:8 },
  aiPill:  { alignSelf:'flex-start', padding:'3px 9px', background:'#FFF',
             border:'1px solid #E4C7BD', color:'#BD7A5E', borderRadius:999,
             font:'600 10.5px Inter', letterSpacing:'0.10em', textTransform:'uppercase',
             whiteSpace:'nowrap' },
  aiBody:  { font:'400 15px/150% Inter', color:'#4A4E48' },
  btns:    { display:'flex', alignItems:'center', gap:8 },
  btn:     { padding:'9px 18px', borderRadius:999, cursor:'pointer',
             font:'500 14px Inter', whiteSpace:'nowrap' },
};

window.FeedCard = FeedCard;
window.AISummary = AISummary;
window.ActionButton = ActionButton;
window.UrgencyChip = UrgencyChip;
