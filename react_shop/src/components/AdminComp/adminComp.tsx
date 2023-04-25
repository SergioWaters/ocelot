import React from "react";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { IGlobalStore, Sku } from "../../types";
import { useDispatch } from "react-redux";
import {
  CATAL_ADD,
  CATAL_DEL,
} from "../../store/reducers/catalogueReducer/types";
import { AdminPanelForm } from "./AdminPanelForm";

export const AdminComp = () => {
  const dispatch = useDispatch();
  const { catalogue } = useSelector((s: IGlobalStore) => s.catalogue);

  const onChangeSku = (sku: Sku) => {
    dispatch({ type: CATAL_ADD, payload: sku });
  };

  const onDeleteSku = (sku: Sku) => {
    dispatch({ type: CATAL_DEL, payload: sku });
  };

  return (
    <div className={styles.cards + " container"}>
      {Object.values(catalogue).map((sku: Sku) => (
        <AdminPanelForm
          sku={sku}
          onSubmit={onChangeSku}
          onDelete={onDeleteSku}
          key={sku.art}
        />
      ))}
    </div>
  );
};
