import { Spinner } from '@chakra-ui/react';
import { Redirect } from 'wouter';
import Gif from '../../components/Gif';
import useSingleGif from '../../hooks/useSingleGif';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : '';

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  // Redirect componet from wouter
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{gif.title} || Giffy</title>
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
