Feature: Product Management

    Rules:
    1. You must be able to add a Product

    Background: Ensure that the Product isn't in the system
        Given a Product doesn't exist

            | name    | description      | price |
            | Carrots | Orange Vegetable |  10 |

    Scenario: A Product is added
        When I add the Product
        Then The Product is created