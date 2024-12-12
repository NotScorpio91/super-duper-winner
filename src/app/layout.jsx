import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import '../styles/main.scss';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "SwapStation: Where skins travel first-class!",
    description: "Introducing SwapStation, where the world of skin trading meets the speed of a steam-powered locomotive. Our platform offers a vibrant marketplace where users can swap, exchange, and discover a wide array of digital items. Whether you're a seasoned trader or just getting started, SwapStation provides the perfect platform to connect with fellow enthusiasts and find the skins you've been dreaming of. Join us on this exciting journey and experience the thrill of trading at the speed of light!",
    openGraph: {
        images: '/thumbnail.jpg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={outfit.className}>
				<Toaster />
				{children}
			</body>
        </html>
    );
}
