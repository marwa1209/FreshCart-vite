import  { FC, useEffect } from 'react';
import { useCategoriesinfinite } from '@/services/queries';
import { useInView } from 'react-intersection-observer';
import Loader from '../Loader/Loader';

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
    const {
    data,
    isError,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useCategoriesinfinite();
    const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage ,fetchNextPage]);
    if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError && !isPending) {
    return <h3>error getting Categories data:{error.message}</h3>;
  }
  if (data?.pages[0]?.data.length === 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3 ">
        <h1> No Categories</h1>
      </div>
    );
  }
    if (data?.pages[0]?.data.length > 0) {
      return (
        <div className="my-16 container m-auto">
          <h2>OUR Categories</h2>
          {data.pages.map((page: any, pageIndex: number) => (
            <div key={pageIndex}>
              <div className="flex flex-wrap ">
                {page.data.map((category: any) => (
                  <div
                    key={category._id}
                    ref={ref}
                    className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
                  >
                    <div className="px-4">
                      <img
                        className="mb-3 h-64 xl:w-full min-[420px]:w-[80%] block m-auto"
                        src={category.image}
                        alt={category.slug}
                      />
                      <h3 className="text-sm text-main-color">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {isFetchingNextPage && (
            <i className="fa-solid fa-circle-notch fa-spin me-2"></i>
          )}
        </div>
      );
    }

};

export default Categories;
