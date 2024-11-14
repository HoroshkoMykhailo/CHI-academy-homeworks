import React from 'react';
import { fetchExhibits } from '~/api/exhibitActions';
import { ControlBar, ExhibitsList } from '~/components/components';
import { pageLimit } from '~/constants/constants';

export default async function Home({ searchParams }: { searchParams: { page: string } }): Promise<JSX.Element> {
  const { page } = await searchParams;
  const pageNumber = parseInt(page || "1");

  const data = await fetchExhibits(pageNumber, pageLimit, false);
  return (
    <>
      <ControlBar />
      <ExhibitsList
        exhibits={data.data}
        page={pageNumber}
        lastPage={data.lastPage || 1}
      />
    </>
  );
}