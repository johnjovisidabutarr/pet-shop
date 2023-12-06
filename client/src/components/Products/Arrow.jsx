const Arrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '100px',
        margin: '0 1rem 0 0',
      }}
      onClick={onClick}
    />
  )
}
export default Arrow
