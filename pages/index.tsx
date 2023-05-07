import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Workout from '@/components/Workout'
import SecondBanner from '@/components/SecondBanner'
import OurTeam from '@/components/OurTeam'
import Package from '@/components/Package'
import SliderBanner from '@/components/SliderBanner'
import Supliments from '@/components/Supliments'
import Subscription from '@/components/Subscription'


export default function Home() {
  return (
    <main data-theme="light">
      <Header></Header>
      <Banner></Banner>
      <Workout></Workout>
      <SecondBanner></SecondBanner>
      <OurTeam></OurTeam>
      <Package></Package>
      <SliderBanner></SliderBanner>
      <Subscription></Subscription>
      <Supliments></Supliments>

    </main>
  )
}
