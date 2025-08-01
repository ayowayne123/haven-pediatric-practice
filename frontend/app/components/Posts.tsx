import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import {
  morePostsQuery,
  allPostsQuery,
  recentPostsQuery,
} from "@/sanity/lib/queries";
import { Post as PostType, AllPostsQueryResult } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import CoverImage from "@/app/components/CoverImage";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import Avatar from "@/app/components/Avatar";
import { createDataAttribute } from "next-sanity";

const Post = ({ post }: { post: AllPostsQueryResult[number] }) => {
  const { _id, title, slug, excerpt, date, author } = post;

  const attr = createDataAttribute({
    id: _id,
    type: "post",
    path: "title",
  });

  return (
    <article
      data-sanity={attr()}
      key={_id}
      className="  py-6  flex flex-col justify-between transition-colors  relative"
    >
      <div className="relative w-full h-60 overflow-hidden rounded-xl">
        <Image
          className="object-cover"
          alt={`${title}`}
          src={urlForImage(post.coverImage)?.url() as string}
          fill
        />
      </div>
      <div className="flex justify-between">
        <time className="text-[#7B7979] text-sm my-4 " dateTime={date}>
          <DateComponent dateString={date} />
        </time>
        <div className="flex items-center justify-between  border-t border-gray-100">
          {author && author.firstName && author.lastName && (
            <div className="flex items-center">
              <Avatar person={author} small={true} />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 ">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-[#403C3C] max-w-[70ch] mb-6">
          {excerpt}
        </p>
        <Link
          className="hover:text-havenPink underline text-sm transition-colors"
          href={`/blog/${slug}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    <div className="pt-6 space-y-6">{children}</div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};

export const RecentPosts = async () => {
  const { data } = await sanityFetch({
    query: recentPostsQuery,
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts>
      <div className="grid lg:grid-cols-3 gap-16">
        {data.map((post: any) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts>
      <div className="grid lg:grid-cols-3 gap-16">
        {data.map((post: any) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </Posts>
  );
};
