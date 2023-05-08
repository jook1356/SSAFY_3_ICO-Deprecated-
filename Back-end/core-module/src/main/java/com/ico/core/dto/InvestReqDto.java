package com.ico.core.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * @author 변윤경
 */
@Getter
@Setter
@NoArgsConstructor
public class InvestReqDto {
    @NotNull(message = "714")
    private int price;

    @NotNull(message = "715")
    @Min(value = 0, message = "716")
    private int amount;

    @Builder
    public InvestReqDto(int price, int amount) {
        this.price = price;
        this.amount = amount;
    }
}
