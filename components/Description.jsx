import Card from "./Card";

const Description = () => {

    return (
        <div className="flex flex-col text-center p-20">
            <div className="flex justify-center">
                <h1 className="text-4xl text-grey-light">Collaborate with brands and agencies to <br/> create impactful results.</h1>
            </div>
            <div className="flex mt-20">
                <Card icon="/images/ui.svg" heading="UI/UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use." />
                <Card icon="/images/web.svg" heading="Web & Mobile App" description="Transforming ideas into exceptional web and mobile app experiences." />
                <Card icon="/images/Design.svg" heading="Design & Creative" description="Crafting visually stunning designs that connect with your audience." />
                <Card icon="/images/Development.svg" heading="Development" description="Bringing your vision to life with the latest technology and design trends." />
            </div>
        </div>
    )
}
export default Description;