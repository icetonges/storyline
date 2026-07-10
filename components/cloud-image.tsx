type CloudImageProps = { src: string; alt: string; className?: string };

export function CloudImage({ src, alt, className }: CloudImageProps) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const delivered = cloud
    ? `https://res.cloudinary.com/${cloud}/image/fetch/f_auto,q_auto,c_fill,w_1400,h_900/${encodeURIComponent(src)}`
    : src;

  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={delivered} alt={alt} loading="lazy" />;
}
