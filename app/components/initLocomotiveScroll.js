import '@/app/css/locomotive-scroll.css'

export const initLocomotiveScroll = () => {
  (
    async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
    }
  )()
}