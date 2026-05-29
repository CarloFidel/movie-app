import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test } from "vitest";
import RouteProtecter from "./RouteProtecter";
import { AuthContext } from "../../contexts/Auth/AuthContext";

describe("RouteProtecter", () => {
    
  const mockAuthValue = (isAuth: boolean) => ({
    isAuth,
    token: isAuth ? "token" : null,
    user: isAuth
      ? {
          fullName: "Test User",
          email: "test@example.com",
          id: "1",
          isActive: true,
          roles: ["user"],
        }
      : null,
    login: () => {},
    logout: () => {},
  });

  test("Should render correctly if user is auth", () => {
    const { container } = render(
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthValue(true)}>
          <RouteProtecter>
            <div>Protected Content</div>
          </RouteProtecter>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Should redirect to register form if user is not auth", () => {
    const { container } = render(
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthValue(false)}>
          <RouteProtecter>
            <div>Protected Content</div>
          </RouteProtecter>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // El contenido protegido no debe estar en el DOM
    expect(container.textContent).not.toContain("Protected Content");
  });
});
