import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName='midudev' name='Miguel Angel Duran' />
      <TwitterFollowCard isFollowing={false} userName='IAViajero' name='IA VIAJERO' />
      <TwitterFollowCard isFollowing userName='blockhouse_club' name='BLOCK HOUSE' />
      <TwitterFollowCard userName='Carlospapamija' name='Carlos Papamija' />
    </section>
  )

}