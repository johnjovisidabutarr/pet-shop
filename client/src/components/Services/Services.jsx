import './Services.css'
import { TbHomeHeart } from 'react-icons/tb'
import { TbDogBowl } from 'react-icons/tb'
import { MdOutlinePets } from 'react-icons/md'
import { GiJumpingDog } from 'react-icons/gi'
import { PiDogLight } from 'react-icons/pi'
import { GiLoveInjection } from 'react-icons/gi'

const icons = [
  {
    text: 'Pet boarding',
    icon: <TbHomeHeart />,
    description:
      'Trust our secure and comfortable facilities for quality boarding, where your pet receives attention, love, and proper care.',
  },
  {
    text: 'Pet feeding',
    icon: <TbDogBowl />,
    description:
      'Nourish your pet with balanced meals, tailored to their dietary needs, ensuring health and vitality.',
  },
  {
    text: 'Pet grooming',
    icon: <PiDogLight />,
    description:
      'Pamper your pet with expert grooming, including baths, trims, and nail care for a pristine appearance.',
  },
  {
    text: 'Pet training',
    icon: <MdOutlinePets />,
    description:
      'Cultivate good behavior and obedience in your pet through personalized training sessions for a harmonious relationship.',
  },
  {
    text: 'Pet exercise',
    icon: <GiJumpingDog />,
    description:
      'Promote physical fitness with engaging exercise routines, keeping your pet active, happy, and healthy.',
  },
  {
    text: 'Pet treatment',
    icon: <GiLoveInjection />,
    description: `Ensure your pet's well-being with specialized treatments addressing health concerns, administered with care and expertise.`,
  },
]

const Services = () => {
  return (
    <div className='service' id='service'>
      <h5>Services</h5>
      <h1>Our excellent pet care services</h1>

      <div className='grid-container'>
        {icons.map((icon, i) => (
          <div key={i} className='grid-item'>
            <div className='service-card'>
              <i>{icon.icon}</i>
              <h2>{icon.text}</h2>
            </div>
            <p>{icon.description}</p>
            <a href='#'>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
