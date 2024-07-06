import Offers from "./Offers";

const links = [
    {
        image: 'https://www.hiamag.com/sites/default/files/article/23/07/2020/9541446-665724726.jpg',
        title: 'Meat meals', description: 'Meat meals', price:'200'
    },
    {
        image: 'https://cdn.alweb.com/thumbs/wasfatsehiyah/article/fit727x484/1/5-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D9%84%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%B5%D8%AF%D9%88%D8%B1-%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D9%84%D8%B0%D9%8A%D8%B0%D8%A9.jpeg',
        title: 'Chicken meals', description: 'Chicken meals', price:'150'
    },
    {
        image: 'https://images.akhbarelyom.com/images/images/large/20210602000242911.jpg',
        title: 'Fish meals', description: 'Fish meals', price:'130'
    },
    {
        image: 'https://www.tastingtable.com/img/gallery/should-you-refrigerate-dried-fruit/intro-1664820266.jpg',
        title: 'dried fruit', description: 'dried fruit', price:'70'
    },
    {
        image: 'https://www.foodandwine.com/thmb/q9tccMZgV9aifYtmlvh9qcPmb_8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Greek-Salad-Romaine-FT-RECIPE1222-8a49c63ede714dfb8fdc0c35088fcd18.jpg',
        title: 'Salad', description: 'Salad', price:'80'
    },
    {
        image: 'https://media.gemini.media/img/large/2021/8/28/2021_8_28_2_33_57_669.jpg',
        title: 'Drinks', description: 'Drinks', price:'20'
    },
];
const OffersData = () => {

return (
    <>
        <Offers links={links} />
    </>
)
}

export default OffersData