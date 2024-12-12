import SubscribeForm from "@/components/Form";
import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";

import "./counter.scss";

export default function Home() {
    return (
        <main>
            <div className="bg"></div>
            <div className="bg2"></div>
            <div className='content'>
                <div className='logo'>
                    <Image
                        src='/logo.png'
                        alt='Swapstation logo'
                        height={270}
                        width={800}
                        className="logo-image"
                    />
                </div>

                <div className='social'>
                    <p>
                        Follow us on our socials, where we post frequently our
                        updates
                    </p>
                    <div className='list'>
                        <a href='https://tridentventures.org' target='_blank'>
                            <Image
                                src='/social/discord.svg'
                                alt='Discord'
                                height={50}
                                width={50}
                            />
                        </a>
                    </div>
                </div>

                <div className='footer'>
                    <p>
                        Copyright ­­© 2024. RoCases
                        <br />
                        <a href='https://tridentventures.org/'>
                            All rights reserved. Managed by Frosted
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
