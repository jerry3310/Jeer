import './index.scss'

const data = {
  title: 'About JEER',
  team: [
    { name: 'U2777.eth', src: 'src/assets/images/about/U2777.eth.png' },
    { name: 'Yuki.eth', src: 'src/assets/images/about/Yuki.eth.png' },
    { name: 'Goku.eth', src: 'src/assets/images/about/Goku.eth.png' },
    { name: '0xwendii.eth', src: 'src/assets/images/about/0xwendii.eth.png' },
    { name: 'Vic0x919.eth', src: 'src/assets/images/about/Vic0x919.eth.png' },
  ],
  founder: { name: 'SmallHome', src: 'src/assets/images/about/SmallHome.png' },
}
const About = () => {
  return (
    <div className="app-contanier about">
      <div className="title">{data.title}</div>
      <div className="info">
        <div className="info-text">
          A collection of NFTs gifted to our builders. All of them are created by AI, with a total
          of <span className="money">80,000 </span>generated, and{' '}
          <span className="money">2,000</span> selected. Ultimately, a friend of an encryption
          enthusiast chose <span className="count">520</span> to remain in existence!
        </div>
      </div>
      <div className="team">
        <div className="founder">
          <div className="name">Founder</div>
          <div className="img">
            <img src={data.founder.src} />
            <div className="img-info">
              <span>{data.founder.name}</span>
            </div>
          </div>
        </div>
        <div className="core-team">
          <div className="name">Core Team</div>
          <ul className="teams">
            {data.team.map((item, index) => {
              return (
                <li className="team-items" key={index}>
                  <img src={item.src} />
                  <div className="img-info">
                    <span>{item.name}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
