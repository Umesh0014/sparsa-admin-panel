/* global React */

function FilterPills({ filters, active, onSelect }) {
  return (
    <div style={fpStyles.row}>
      {filters.map(f => {
        const isActive = f.id === active;
        return (
          <button key={f.id}
            onClick={() => onSelect && onSelect(f.id)}
            style={{ ...fpStyles.pill,
              background: isActive ? '#3D5943' : 'transparent',
              borderColor: isActive ? '#3D5943' : '#D9C7BA',
              color: isActive ? '#FBF4F1' : '#4A4E48',
            }}>
            {f.label}
            <span style={{
              opacity: isActive ? 0.75 : 1,
              color: isActive ? '#FBF4F1' : '#7A7670',
              marginLeft: 8,
            }}>{f.count}</span>
          </button>
        );
      })}
    </div>
  );
}

const fpStyles = {
  row:  { display:'flex', alignItems:'center', flexWrap:'wrap', gap:8 },
  pill: { display:'inline-flex', alignItems:'center',
          padding:'7px 16px', border:'1px solid', borderRadius:999,
          font:'500 14px Inter', cursor:'pointer' },
};

window.FilterPills = FilterPills;
