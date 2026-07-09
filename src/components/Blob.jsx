export default function Blob({ color = 'var(--lime)', className = '', style = {} }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      style={{ position: 'absolute', ...style }}
    >
      <path
        fill={color}
        d="M44.6,-58.6C56.9,-49.5,65,-34.4,68.9,-18.3C72.8,-2.2,72.5,15,65.5,29.1C58.5,43.2,44.8,54.2,29.5,60.8C14.2,67.4,-2.7,69.6,-19.2,66.1C-35.7,62.6,-51.8,53.4,-61.2,39.4C-70.6,25.4,-73.3,6.6,-69.8,-10.6C-66.3,-27.8,-56.6,-43.4,-43.2,-52.7C-29.8,-62,-14.9,-65,1.2,-66.6C17.3,-68.2,32.3,-67.7,44.6,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
