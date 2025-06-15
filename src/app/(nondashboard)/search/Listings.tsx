import Card from "@/components/Card";
import CardCompact from "@/components/CardCompact";
import {
  useAddFavoritePropertyMutation,
  useGetAuthUserQuery,
  useGetPropertiesQuery,
  useGetTenantQuery,
  useRemoveFavoritePropertyMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { Property } from "@/types/prismaTypes";
import React from "react";

export default function Listings() {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: tenant } = useGetTenantQuery(
    authUser?.cognitoInfo.userId || "",
    {
      skip: !authUser?.cognitoInfo.userId,
    }
  );
  const [addFavorite] = useAddFavoritePropertyMutation();
  const [removeFavorite] = useRemoveFavoritePropertyMutation();
  const filters = useAppSelector((state) => state.global.filters);
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);

  const handleFavoriteToggle = async (propertyId: number) => {
    if (!authUser) return;

    const isFavorite = tenant?.favorites?.some(
      (fav: Property) => fav.id === propertyId
    );

    if (isFavorite) {
      await removeFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    } else {
      await addFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    }
  };

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <>Something went wrong</>;

  return (
    <div className="w-full ">
      <h3 className="text-sm px-4 font-bold">
        {properties.length}{" "}
        <span className="text-gray-700 font-normal">
          Places in {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {properties?.map((p) =>
            viewMode === "grid" ? (
              <Card
                key={p.id}
                property={p}
                isFavorite={tenant?.favorites?.some(
                  (fav: Property) => fav.id === p.id
                )}
                onFavoriteToggle={() => handleFavoriteToggle(p.id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${p.id}`}
              />
            ) : (
              <CardCompact
                key={p.id}
                property={p}
                isFavorite={tenant?.favorites?.some(
                  (fav: Property) => fav.id === p.id
                )}
                onFavoriteToggle={() => handleFavoriteToggle(p.id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${p.id}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
