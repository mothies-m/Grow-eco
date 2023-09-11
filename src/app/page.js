import FeatureCards from "@/components/home/FeatureCards"
import HomePage from "@/components/home/HomePage"
import TextBox from "@/components/home/TextBox"

export default function page() {
  return (
    <div className="w-full h-full">
      <HomePage />
      <FeatureCards />
      <TextBox />
    </div>
  )
}
