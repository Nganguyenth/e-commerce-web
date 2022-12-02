import { BannerOfferSection } from './BannerOfferSection'
import { BannerSection } from './BannerSection'
import { BlogSection } from './BlogSection'
import { BrandSection } from './BrandSection'
import { NewArrivalCategory } from './NewArrivalCategory'
import { NewArrivalSection } from './NewArrivalSection'
import { ProductSection } from './ProductSection'
import { ServiceSection } from './ServiceSection'
import { SliderSection } from './SliderSection'
import { SubscribeSection } from './SubscribeSection'
import { PromoCodeSection } from './PromoCodeSection'
import { PromoSection } from './PromotionSection'

export const HomeClient = () => {
  return (
    <>
      <SliderSection />
      <ServiceSection />
      <BannerSection />
      <NewArrivalSection />
      <ProductSection />
      <PromoSection />
      <PromoCodeSection />
      <NewArrivalCategory />
      <BannerOfferSection />
      <BlogSection />
      <SubscribeSection />
      <BrandSection />
    </>
  )
}
