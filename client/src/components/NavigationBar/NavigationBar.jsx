import './NavigationBar.css'

const lists = [
  {
    text: 'about',
  },
  {
    text: 'service',
  },
  {
    text: 'product',
  },
  {
    text: 'contact',
  },
]

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <h1>PET SHOP</h1>

      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        {lists.map((list, i) => (
          <li key={i}>
            <a href={`#${list.text}`}>{list.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationBar
