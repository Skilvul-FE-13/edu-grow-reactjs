import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function toolsCard() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row max-sm:pl-9">
    <Card className="w-[255px] h-[348px] "
  imgAlt="Meaningful alt text for an image that is not purely decorative"
  imgSrc="https://source.unsplash.com/467x232?design"
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Figma
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Software Gratis
    </p>
  </p>
  <Link
                                to='https://www.figma.com/downloads/'
                                className="mt-6 w-[200px]
                                h-[69px] rounded-md text-[#3A5088] py-6 text-center text-sm font-semibold bg-white outline focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Download Now
                            </Link>
</Card>
<Card className="w-[255px] h-[348px] "
  imgAlt="Meaningful alt text for an image that is not purely decorative"
  imgSrc="https://source.unsplash.com/467x232?design"
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Figma
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Software Gratis
    </p>
  </p>
  <Link
                                to='https://www.figma.com/downloads/'
                                className="mt-6 w-[200px]
                                h-[69px] rounded-md text-[#3A5088] py-6 text-center text-sm font-semibold bg-white outline focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Download Now
                            </Link>
</Card>

    </div>
  )
}


