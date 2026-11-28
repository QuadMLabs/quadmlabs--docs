/**
 * GoatCounter counts the first page load on its own. Docusaurus then navigates
 * client-side (no full reload), so later page views are reported here.
 */
export function onRouteDidUpdate({location, previousLocation}) {
  if (!previousLocation || location.pathname === previousLocation.pathname) {
    return;
  }
  if (typeof window !== 'undefined' && window.goatcounter?.count) {
    window.goatcounter.count({path: location.pathname});
  }
}
