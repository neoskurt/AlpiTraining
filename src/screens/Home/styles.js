import {StyleSheet} from 'react-native';
import {
  OPEN_SANS_BOLD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  OPEN_SANS_SEMIBOLD,
  FONT_SIZE_XXS,
  FONT_SIZE_XL,
  OPEN_SANS_MEDIUM,
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_DRAWER_MENU_ICON_WRAPPER_SIZE,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_BORDER_RADIUS,
} from '../../config/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  topContentWrapper: {
    flex: 0.5,
    paddingHorizontal: STANDARD_SPACING * 3,
    position: 'relative',
  },
  payeeName: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_SM,
    marginVertical: STANDARD_SPACING * 3,
  },
  invoiceNumberLabel: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  invoiceNumber: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  invoiceNumberAndStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  invoiceNumberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  invoiceTotalOverviewWrapper: {
    position: 'absolute',
    width: '75%',
    bottom: STANDARD_SPACING * 3,
    alignSelf: 'center',
    borderRadius: STANDARD_SPACING * 4,
    padding: STANDARD_SPACING * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountPaidLabel: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XXS,
  },
  amountPaidValue: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XL,
  },
  bottomContentWrapper: {
    flex: STANDARD_FLEX,
    borderTopLeftRadius: STANDARD_BORDER_RADIUS * 5,
    borderTopRightRadius: STANDARD_BORDER_RADIUS * 5,
    position: 'relative',
    padding: STANDARD_SPACING * 3,
  },
  invoiceIssueDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payeeDetailsWrapper: {
    alignItems: 'center',
  },
  issuedAndDueOnLabel: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  issuedAndDueDate: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  payeeAvatarWrapper: {
    width: STANDARD_USER_AVATAR_WRAPPER_SIZE,
    aspectRatio: 1,
    borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE * 0.5,
  },
  payeeAvatar: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: STANDARD_SPACING * 3,
    marginTop: STANDARD_SPACING * 3,
  },
  drawerMenuIconWrapper: {
    width: STANDARD_DRAWER_MENU_ICON_WRAPPER_SIZE,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_DRAWER_MENU_ICON_WRAPPER_SIZE * 0.5,
  },
  welcomeLabel: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XL,
  },
  payeeName2: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
    marginVertical: STANDARD_SPACING,
  },
  payeeEmail: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  dueOnWrapper: {
    alignItems: 'flex-end',
  },
  orderedItemsWrapper: {
    flex: STANDARD_FLEX,
  },
  orderedItemsLabel: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
    marginVertical: STANDARD_SPACING * 3,
  },
  scrollViewWrapper: {
    flex: STANDARD_FLEX,
    backgroundColor: 'green',
  },
  orderedItemWrapper: {
    padding: STANDARD_SPACING ,
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    marginBottom: STANDARD_SPACING * 3,
  },
  orderedItemNameAndPriceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: STANDARD_SPACING,
  },
  orderedItemNameWrapper: {
    flex: STANDARD_FLEX,
  },
  orderedItemCostWrapper: {
    flex: 0.25,
    alignItems: 'flex-end',
  },
  orderedItemName: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  orderedItemCost: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  orderedItemQtyAndRate: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XXS,
  },
  invoiceTotalAndTaxWrapper: {
    padding: STANDARD_SPACING * 1.5,
  },
  invoiceTotalAndTaxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: STANDARD_SPACING * 2,
  },
  invoiceTotalAndTaxLabel: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  invoiceTotalAndTaxValue: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  actionIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  shareIconWrapper: {
    marginLeft: STANDARD_SPACING * 1.5,
  },
});
