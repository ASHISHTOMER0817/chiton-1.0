
import React from 'react'
import CardLayout from './cardlayout';
import Link from 'next/link';


interface dataType {

      results: {
            name: string
            images: {url:string, baseUrl:string}[]
            price:{formattedValue: string}
            articles:{code: string}[]
            rgbColors:string[]
      }[]
}

const HomePageCarousel = ({data}:{data:dataType}) => {



  return (
      <div
      id="slider"
      className="w-full h-full overflow-scroll overflow-x-scroll flex whitespace-nowrap scrollbar-hide scroll-smooth"
>
      {data?.results === undefined
            ? ""
            : data?.results.map(
                  (
                        {
                          name,
                          images,
                          price,
                          articles,
                          rgbColors,
                        }: {
                          name: string;
                          images: {
                            url: string;
                            baseUrl: string;
                          }[];
                          price: {
                            formattedValue: string;
                          };
                          articles: {
                            code: string;
                          }[];
                          rgbColors: string[];
                        },
                        index: number
                      ) => {
                              const image =
                                    images.length >
                                    0
                                          ? images[0]
                                                      ?.url
                                          : "";
                              const actualPrice: String =
                                    price.formattedValue;
                              const alternate =
                                    images.length >
                                    0
                                          ? images[0]
                                                      ?.baseUrl
                                          : "";

                              const code =
                                    articles[0]
                                          ?.code;

                              return (
                                    <div
                                          key={
                                                index
                                          }
                                    >
                                          <Link
                                                href={`/productPage/${code}`}
                                                className="mb-3 flex flex-col ml-2 text-left w-52 text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-none"
                                          >
                                                <CardLayout
                                                      index={
                                                            index
                                                      }
                                                      image={
                                                            image
                                                      }
                                                      alternate={
                                                            alternate
                                                      }
                                                      name={
                                                            name
                                                      }
                                                      price={
                                                            actualPrice
                                                      }
                                                      codes={
                                                            code
                                                      }
                                                      clothColor={
                                                            rgbColors
                                                      }
                                                />
                                          </Link>
                                    </div>
                              );
                        }
              )}
</div>
  )
}

export default HomePageCarousel