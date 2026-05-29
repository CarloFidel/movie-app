import { describe, expect, test } from "vitest";
import {render } from '@testing-library/react'
import LoadingComponent from "./LoadingComponent";

describe("ActorCard", () => {
  test("Should render componsnt properly", () => {
    const {container} = render(<LoadingComponent/>)
    expect(container).toMatchSnapshot()
  });
});
