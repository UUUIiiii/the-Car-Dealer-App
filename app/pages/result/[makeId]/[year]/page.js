"use client";
import { useParams } from "next/navigation";
import { Suspense, lazy } from "react";

const ModelsList = lazy(() =>
  import("../../../../components/ModelList/ModelList")
);

const ResultPage = () => {
  const { makeId, year } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-10 bg-lightBlue">
      <h1 className="text-2xl font-bold mb-4">Available Models for {year}</h1>
      <Suspense fallback={<p className="text-center p-4">Loading models...</p>}>
        <ModelsList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
