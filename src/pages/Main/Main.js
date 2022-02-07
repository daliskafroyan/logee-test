import React, { useEffect } from 'react';
import styles from './styles.scoped.css';
import HeadingPort from '@components/elements/HeadingPort';
import { fetchData } from '../../actioncreator/action';
import { useDispatch, connect } from 'react-redux';
import { Typography } from 'logeeport-ui';
import CollapseInfo from '@components/elements/CollapseInfo';
import { dashboardCollapseableMenu } from './constants';
import { currencyFormatter } from '@utils/format';

function Main(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData('fetchDashboardGmv', '', '', 'MainApi'));
  }, []);
  const { isLoading, data, message } = props.state.main;

  mapToCollapseableMenu(data.fetchDashboardGmv.data);

  return (
    <div className={styles.dashboardBackground}>
      <HeadingPort title="Laporan Performa Bisnis" />
      <div className={styles.dashboardHeader}>
        <table style={{ width: '100%' }}>
          <thead>
            <th style={{ textAlign: 'left' }}>
              <p>Periode Laporan: 2021</p>
            </th>
            <th style={{ textAlign: 'right' }}>
              <p>Pembaruan Terakhir: 13 Okt 2021 · 20:22 WIB</p>
            </th>
          </thead>
        </table>
      </div>
      <CollapseInfo header={dashboardCollapseableMenu.gmv}>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left' }}>
                <Typography variant="h5">
                                    Transaksi Kontainer
                </Typography>
              </th>
              <th style={{ textAlign: 'right' }}>
                <Typography variant="h5">
                  {dashboardCollapseableMenu.gmv.container}
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left' }}>
                <Typography variant="h5">
                                    Transaksi Pesanan Truk
                </Typography>
              </th>
              <th style={{ textAlign: 'right' }}>
                <Typography variant="h5">
                  {dashboardCollapseableMenu.gmv.truckOrder}
                </Typography>
              </th>
            </thead>
          </table>
        </div>
      </CollapseInfo>

      <CollapseInfo header={dashboardCollapseableMenu.transaksi}>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Kontainer</Typography>
              </th>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Paylater</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .containerCountPayLater
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Econ</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .containerCountEcon
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">VA</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .containerCountVA
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Pesanan Truk
                </Typography>
              </th>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Internal B2B
                </Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .orderTruckCountInternalB2B
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Paylater</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .orderTruckCountPayLater
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>{' '}
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Kartu Kredit
                </Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .orderTruckCountCC
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Invoice Acceptance
                </Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.transaksi
                      .orderTruckCountInvoiceAcceptance
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
      </CollapseInfo>

      <CollapseInfo header={dashboardCollapseableMenu.revenue}>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Kontainer</Typography>
              </th>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Paylater</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.revenue
                      .containerPayLater
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Transaksi Pesanan Truk
                </Typography>
              </th>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Paylater</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.revenue
                      .orderTruckPayLater
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Invoice Acceptance
                </Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.revenue
                      .orderTruckInvoiceAcceptance
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Charge Fee</Typography>
              </th>
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">Kontainer</Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.revenue
                      .chargeFeeContainer
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
        <div className={styles.collapseableContent}>
          <table style={{ width: '100%' }}>
            <thead>
              <th style={{ textAlign: 'left', width: '33%' }} />
              <th style={{ textAlign: 'left', width: '33%' }}>
                <Typography variant="h5">
                                    Pesanan Truk
                </Typography>
              </th>
              <th style={{ textAlign: 'right', width: '33%' }}>
                <Typography variant="h5">
                  {
                    dashboardCollapseableMenu.revenue
                      .chargeFeeOrderTruck
                  }
                </Typography>
              </th>
            </thead>
          </table>
        </div>
      </CollapseInfo>
    </div>
  );
}

const mapToCollapseableMenu = (data) => {
  if (data) {
    dashboardCollapseableMenu.gmv.total = currencyFormatter(data.gmv.total);
    dashboardCollapseableMenu.gmv.container = currencyFormatter(
      data.gmv.container
    );
    dashboardCollapseableMenu.gmv.truckOrder = currencyFormatter(
      data.gmv.truckOrder
    );

    dashboardCollapseableMenu.transaksi.containerCountPayLater =
            data.transaction.containerCountPayLater;
    dashboardCollapseableMenu.transaksi.containerCountEcon =
            data.transaction.containerCountEcon;
    dashboardCollapseableMenu.transaksi.containerCountVA =
            data.transaction.containerCountVA;
    dashboardCollapseableMenu.transaksi.orderTruckCountInternalB2B =
            data.transaction.orderTruckCountInternalB2B;
    dashboardCollapseableMenu.transaksi.orderTruckCountPayLater =
            data.transaction.orderTruckCountPayLater;
    dashboardCollapseableMenu.transaksi.orderTruckCountCC =
            data.transaction.orderTruckCountCC;
    dashboardCollapseableMenu.transaksi.orderTruckCountInvoiceAcceptance =
            data.transaction.orderTruckCountInvoiceAcceptance;
    dashboardCollapseableMenu.transaksi.total = data.transaction.total;

    dashboardCollapseableMenu.revenue.total = currencyFormatter(
      data.revenue.total
    );
    dashboardCollapseableMenu.revenue.containerPayLater = currencyFormatter(
      data.revenue.containerPayLater
    );
    dashboardCollapseableMenu.revenue.orderTruckPayLater =
            currencyFormatter(data.revenue.orderTruckPayLater);
    dashboardCollapseableMenu.revenue.orderTruckInvoiceAcceptance =
            currencyFormatter(data.revenue.orderTruckInvoiceAcceptance);
    dashboardCollapseableMenu.revenue.chargeFeeContainer =
            currencyFormatter(data.revenue.chargeFeeContainer);
    dashboardCollapseableMenu.revenue.chargeFeeOrderTruck =
            currencyFormatter(data.revenue.chargeFeeOrderTruck);
  }
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(Main);
