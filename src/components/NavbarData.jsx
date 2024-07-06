import Navbar from "./Navbar"

const NavebarData = () => {
    const links = [
        { href: '#About', text: 'About' },
        { href: '#Offers', text: 'Offers' },
        { href: '#Contact', text: 'Contact' },
        { href: '#Social', text: 'Social' },
    ];
return (
    <>
        <Navbar links={links} />
    </>
)
}

export default NavebarData