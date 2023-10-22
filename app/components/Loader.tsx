// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextImage  } from '@prismicio/next';

export default async function Loader() {

    const client = createClient();
  
    const settings = await client.getSingle("settings");

    return (
        <>
            <div className="slide-in-1">

            </div>
            <div className="slide-in-2">
                <PrismicNextImage field={settings.data.site_logo} className="site-logo loader"/>
            </div>
        </>
    )
}