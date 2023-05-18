package com.ico.core.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

/**
 * @author 변윤경
 */
@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TeacherProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nation_id")
    private Nation nation;

    private String title;

    private int amount;

    private String images;

    private String detail;

    private byte count;

    private Boolean rental;

    private byte sold;

    private LocalDateTime date;

    @Builder
    public TeacherProduct(Long id, Nation nation, String title, int amount, String images, String detail, byte count, Boolean rental, byte sold, LocalDateTime date) {
        this.id = id;
        this.nation = nation;
        this.title = title;
        this.amount = amount;
        this.images = images;
        this.detail = detail;
        this.count = count;
        this.rental = rental;
        this.sold = sold;
        this.date = date;
    }
}
