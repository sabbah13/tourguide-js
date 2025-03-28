import type { AlignedPlacement, Side } from "@floating-ui/core"
import { TourGuideStep } from "../types/TourGuideStep"

/**
 * TourGuideOptions Type
 */
export interface TourGuideOptions {
  autoScroll?: boolean // auto scroll to elements
  autoScrollSmooth?: boolean // auto scroll smooth
  autoScrollOffset?: number // Offset from edge for smooth scroll
  backdropClass?: string // css transition classes
  backdropAnimate?: boolean // animate backdrop position & size
  backdropColor?: string // RGBA support only
  targetPadding?: number // space around highlighted target in px
  dialogClass?: string // css class for tour dialog
  allowDialogOverlap?: boolean // allow dialog to overlap target
  dialogZ?: number // z-index of dialog
  dialogWidth?: number // width style property for dialog - recommended if loading images into content
  dialogMaxWidth?: number // max-width style property for dialog
  dialogAnimate?: boolean // Animate dialog position & size
  dialogPlacement?: Side | AlignedPlacement // TODO - test this param
  nextLabel?: string // text for next button
  prevLabel?: string // text for prev button
  finishLabel?: string // text for finish button
  hideNext?: boolean // hide next button
  hidePrev?: boolean // hide prev button
  completeOnFinish?: boolean // Set tour as finished in localStorage on finish
  keyboardControls?: boolean // enable next & prev arrow + esc key
  exitOnEscape?: boolean // Close the tour on escape key
  exitOnClickOutside?: boolean // Close the tour on backdrop click
  showStepDots?: boolean // show the dots tour progress
  stepDotsPlacement?: "footer" | "body" // show dots in dialog body/footer
  showButtons?: boolean // show next/prev buttons
  showStepProgress?: boolean // show `1/5` human-readable step progress
  progressBar?: string // show progress bar under header
  closeButton?: boolean // show close button
  rememberStep?: boolean // open tour on last active step
  debug?: boolean // show console logging
  steps?: TourGuideStep[] // pre-define the tour steps
  activeStepInteraction?: boolean // allow active tour step element to be interacted with
}
