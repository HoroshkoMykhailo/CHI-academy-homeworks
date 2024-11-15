import React from 'react';
import { fetchExhibits } from '~/api/exhibitActions';
import { ControlBar, ExhibitsList } from '~/components/components';
import { pageLimit } from '~/constants/constants';
import { ExhibitsResponse } from '~/types/types';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}): Promise<JSX.Element> {
  const { page } = await searchParams;
  const pageNumber = parseInt(page || "1");

  let data: ExhibitsResponse | null = null;
  let error: Error | null = null;

  try {
    data = await fetchExhibits(pageNumber, pageLimit, false);
  } catch (err) {
    error = err as Error;
  }

  return (
    <>
      <ControlBar />
      <ExhibitsList
        exhibits={data?.data}
        page={pageNumber}
        lastPage={data?.lastPage || 1}
        error={error?.message}
      />
    </>
  );
}