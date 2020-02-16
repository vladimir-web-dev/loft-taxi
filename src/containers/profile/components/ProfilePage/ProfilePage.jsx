import React from "react";
import { Header } from "../../../general/Header";
import { ProfileForm } from "../ProfileForm";
import { ProfileFormSaved } from "../ProfileFormSaved";
import { useSelector } from "react-redux";
import {
  getIsUpdatedSelector,
  getIsFetchingSelector,
  getIsUpdatingSelector
} from "../../../profile/store";
import containerStyles from "../../../../css_modules/Container.module.css";
import { LoadingModal } from "../../../general/LoadingModal";

export function ProfilePage() {
  const isFetching = useSelector(state =>
    getIsFetchingSelector(state.profileReducer)
  );

  const isUpdating = useSelector(state =>
    getIsUpdatingSelector(state.profileReducer)
  );

  const isUpdated = useSelector(state =>
    getIsUpdatedSelector(state.profileReducer)
  );

  return (
    <>
      <section className={containerStyles.vertical}>
        <Header />
        <div className={containerStyles.formContainer}>
          <div className={containerStyles.profileForm}>
            {isUpdated ? <ProfileFormSaved /> : <ProfileForm />}
          </div>
        </div>
      </section>
      <LoadingModal showModal={isFetching || isUpdating} />
    </>
  );
}
