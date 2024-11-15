"use client";
import { useSearchParams } from 'next/navigation';
import { useRequest } from "ahooks";
import React from "react";
import { fetchExhibits } from "~/api/exhibitActions";
import { ControlBar, ExhibitsList } from "~/components/components";
import { pageLimit } from "~/constants/constants";

const HomePage: React.FC = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageNumber = parseInt(page || "1");

  const { data, loading, error, refresh } = useRequest(
    () => fetchExhibits(pageNumber, pageLimit, true),
    { refreshDeps: [page] }
  );

  return (
    <>
      <ControlBar myPosts />
      <ExhibitsList
        exhibits={data?.data}
        page={pageNumber}
        lastPage={data?.lastPage || 1}
        error={error?.message}
      />
    </>
  );
};

export default HomePage;
